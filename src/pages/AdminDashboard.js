import React, { useState, useEffect } from "react";
import { axiosInstance } from "../api/axiosInstance";
import {
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  createProject,
  updateProject,
  deleteProject,
  createSkill,
  updateSkill,
  deleteSkill,
} from "../api/adminApi";
import ProjectForm from "../components/ProjectForm";
import SkillForm from "../components/SkillForm";
import ProfileImageForm from "../components/ProfileImageForm";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminContacts from "./AdminContacts";
import AdminEvents from "./AdminEvents";
import AdminPlans from "./AdminPlans";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    image: null,
  });
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [editingProjectId, setEditingProjectId] = useState(null);
  const [editingSkillId, setEditingSkillId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
    fetchProjects();
    fetchSkills();
  }, []);

  const confirmAction = async (message) => {
    return window.confirm(message);
  };

  const fetchBlogs = async () => {
    try {
      const res = await axiosInstance.get("/blog");
      setBlogs(res.data);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  const fetchProjects = async () => {
    try {
      const res = await axiosInstance.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.error("Error fetching projects:", err);
    }
  };

  const fetchSkills = async () => {
    try {
      const res = await axiosInstance.get("/skills");
      setSkills(res.data);
    } catch (err) {
      console.error("Error fetching skills:", err);
    }
  };

  const handleBlogFormChange = (e) => {
    if (e.target.name === "image") {
      setBlogForm({ ...blogForm, image: e.target.files[0] });
    } else {
      setBlogForm({ ...blogForm, [e.target.name]: e.target.value });
    }
  };

  const handleQuillChange = (content) => {
    setBlogForm({ ...blogForm, content });
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", blogForm.title);
    formData.append("content", blogForm.content);
    if (blogForm.image) formData.append("image", blogForm.image);

    const confirmMsg = editingBlogId
      ? "Are you sure you want to update this blog?"
      : "Are you sure you want to create this blog?";
    if (!(await confirmAction(confirmMsg))) return;

    try {
      setLoading(true);
      if (editingBlogId) {
        await updateBlogPost(editingBlogId, formData);
        setEditingBlogId(null);
      } else {
        await createBlogPost(formData);
      }
      setBlogForm({ title: "", content: "", image: null });
      fetchBlogs();
    } catch (err) {
      console.error("Error saving blog:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (id) => {
    if (!(await confirmAction("Delete this blog permanently?"))) return;
    try {
      setLoading(true);
      await deleteBlogPost(id);
      fetchBlogs();
    } catch (err) {
      console.error("Error deleting blog:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleProjectSave = async (formData) => {
    const confirmMsg = editingProjectId
      ? "Are you sure you want to update this project?"
      : "Are you sure you want to create this project?";
    if (!(await confirmAction(confirmMsg))) return;

    try {
      setLoading(true);
      if (editingProjectId) {
        await updateProject(editingProjectId, formData);
        setEditingProjectId(null);
      } else {
        await createProject(formData);
      }
      fetchProjects();
    } catch (err) {
      console.error("Error saving project:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!(await confirmAction("Delete this project permanently?"))) return;
    try {
      setLoading(true);
      await deleteProject(id);
      fetchProjects();
    } catch (err) {
      console.error("Error deleting project:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSkillSave = async (skillData) => {
    const confirmMsg = editingSkillId
      ? "Are you sure you want to update this skill?"
      : "Are you sure you want to create this skill?";
    if (!(await confirmAction(confirmMsg))) return;

    try {
      setLoading(true);
      if (editingSkillId) {
        await updateSkill(editingSkillId, skillData);
        setEditingSkillId(null);
      } else {
        await createSkill(skillData);
      }
      fetchSkills();
    } catch (err) {
      console.error("Error saving skill:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (id) => {
    if (!(await confirmAction("Delete this skill permanently?"))) return;
    try {
      setLoading(true);
      await deleteSkill(id);
      fetchSkills();
    } catch (err) {
      console.error("Error deleting skill:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-gradient-to-b from-indigo-700 to-fuchsia-700 text-white p-6 shadow-xl rounded-r-3xl">
        <h2 className="text-2xl font-bold mb-8 tracking-wide">
          Admin Dashboard
        </h2>
        <nav className="space-y-4">
          <a href="#messages" className="block p-3 rounded-md hover:bg-indigo-600 transition">Messages</a>
          <a href="#events" className="block p-3 rounded-md hover:bg-indigo-600 transition">Events</a>
          <a href="#plans" className="block p-3 rounded-md hover:bg-indigo-600 transition">Plans</a>
          <a href="#blogs" className="block p-3 rounded-md hover:bg-indigo-600 transition">Blogs</a>
          <a href="#projects" className="block p-3 rounded-md hover:bg-indigo-600 transition">Projects</a>
          <a href="#skills" className="block p-3 rounded-md hover:bg-indigo-600 transition">Skills</a>
          <a href="#profile-image" className="block p-3 rounded-md hover:bg-indigo-600 transition">Profile Image</a>
        </nav>
      </div>

      {/* Content */}
      <div className="w-3/4 p-8 space-y-10">
        
        {/* Messages Section - NEW */}
        <section id="messages">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
             <AdminContacts />
          </div>
        </section>

        {/* Events Section */}
        <section id="events">
             <AdminEvents />
        </section>

        {/* Plans Section */}
        <section id="plans">
             <AdminPlans />
        </section>

        {/* Profile Image Section */}
        <section id="profile-image">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Profile Image Management
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ProfileImageForm />
          </div>
        </section>

        {/* Blog Section */}
        <section id="blogs">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Blog Management
          </h2>
          <form
            onSubmit={handleBlogSubmit}
            className="space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <div>
              <label htmlFor="title" className="block text-lg text-gray-700">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={blogForm.title}
                onChange={handleBlogFormChange}
                className="w-full mt-2 p-3 border rounded-md focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter blog title"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-lg text-gray-700">Content</label>
              <ReactQuill value={blogForm.content} onChange={handleQuillChange} className="w-full mt-2" />
            </div>
            <div>
              <label htmlFor="image" className="block text-lg text-gray-700">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleBlogFormChange}
                className="w-full mt-2 p-3 border rounded-md"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="submit"
                disabled={loading}
                className={`px-5 py-2 text-white rounded-md transition ${
                  loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {loading
                  ? "Processing..."
                  : editingBlogId
                  ? "Update Blog"
                  : "Create Blog"}
              </button>
              {editingBlogId && (
                <button
                  type="button"
                  onClick={() => setEditingBlogId(null)}
                  className="px-5 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Blogs
            </h3>
            {blogs.map((blog) => (
              <div
                key={blog._id}
                className="flex justify-between items-center bg-white p-4 mb-3 rounded-lg shadow-sm border hover:shadow-md transition"
              >
                <h4 className="text-lg font-medium">{blog.title}</h4>
                <div>
                  <button
                    onClick={() => setEditingBlogId(blog._id)}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog._id)}
                    disabled={loading}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2 disabled:bg-red-300"
                  >
                    {loading ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Project Management
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <ProjectForm
              project={
                editingProjectId
                  ? projects.find((p) => p._id === editingProjectId)
                  : null
              }
              onSave={handleProjectSave}
              onCancel={() => setEditingProjectId(null)}
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Projects
            </h3>
            {projects.map((project) => (
              <div
                key={project._id}
                className="flex justify-between items-center bg-white p-4 mb-3 rounded-lg shadow-sm border hover:shadow-md transition"
              >
                <h4 className="text-lg font-medium">{project.title}</h4>
                <div>
                  <button
                    onClick={() => setEditingProjectId(project._id)}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProject(project._id)}
                    disabled={loading}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2 disabled:bg-red-300"
                  >
                    {loading ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Skill Management
          </h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <SkillForm
              skill={
                editingSkillId
                  ? skills.find((s) => s._id === editingSkillId)
                  : null
              }
              onSave={handleSkillSave}
              onCancel={() => setEditingSkillId(null)}
            />
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Existing Skills
            </h3>
            {skills.map((skill) => (
              <div
                key={skill._id}
                className="flex justify-between items-center bg-white p-4 mb-3 rounded-lg shadow-sm border hover:shadow-md transition"
              >
                <h4 className="text-lg font-medium">
                  {skill.name} ({skill.level}%)
                </h4>
                <div>
                  <button
                    onClick={() => setEditingSkillId(skill._id)}
                    className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteSkill(skill._id)}
                    disabled={loading}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm ml-2 disabled:bg-red-300"
                  >
                    {loading ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
