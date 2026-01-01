import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setPreview(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !price || !category) {
      return setMessage("Please fill all required fields");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);

    images.forEach((img) => {
      formData.append("productImage", img);
    });

    try {
      setLoading(true);
      setMessage("");

      await axios.post("http://localhost:4000/api/product/create", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setMessage("✅ Product uploaded successfully");
      setTitle("");
      setDescription("");
      setPrice("");
      setCategory("");
      setImages([]);
      setPreview([]);
      navigate("/");
    } catch (error) {
      setMessage("❌ Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Upload New Product</h1>

      {message && (
        <p className="mb-4 text-sm font-medium text-center">{message}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* TITLE */}
        <div>
          <label className="font-semibold">Product Title</label>
          <input
            type="text"
            className="w-full border p-3 rounded mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g iPhone 15 Pro"
          />
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            className="w-full border p-3 rounded mt-1"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Product description..."
          />
        </div>

        {/* PRICE & CATEGORY */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="font-semibold">Price ($)</label>
            <input
              type="number"
              className="w-full border p-3 rounded mt-1"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="font-semibold">Category</label>
            <select
              className="w-full border p-3 rounded mt-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select category</option>
              <option value="electronics">Electronics</option>
              <option value="cosmetics">Cosmetics</option>
              <option value="fashion">Fashion</option>
              <option value="watches">Watches</option>
              <option value="tshirts">T-Shirts</option>
              <option value="bags">Bags</option>
            </select>
          </div>
        </div>

        {/* IMAGE UPLOAD */}
        <div>
          <label className="font-semibold">Product Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImages}
            className="block mt-2"
          />

          {/* IMAGE PREVIEW */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            {preview.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="preview"
                className="h-32 object-cover rounded-lg border"
              />
            ))}
          </div>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
        >
          {loading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
};

export default SellerUpload;
