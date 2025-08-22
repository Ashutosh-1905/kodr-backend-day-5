import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const caption = e.target.caption.value;
    const file = e.target.imageInput.files?.[0];

    const formData = new FormData();

    formData.append("caption", caption);
    formData.append("avatar", file);

    axios.post("http://localhost:3000/posts", formData).then((response) => {
      console.log(response.data);
      navigate("/posts");
    });
  };

  const handleFileChange = (file) => {};

  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <main className="home-root">
      <section className="upload-card" aria-labelledby="uploadHeading">
        <h1 id="uploadHeading" className="title">
          Create Post
        </h1>
        <p className="subtitle">
          Share a moment: add an image and a short caption.
        </p>

        <form className="upload-form" onSubmit={handleSubmit} noValidate>
          <div
            className="dropzone"
            onDragEnter={onDrag}
            onDragOver={onDrag}
            onDragLeave={onDrag}
            onDrop={onDrop}
          >
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(e.target.files?.[0])}
              className="file-input"
            />
            <label htmlFor="imageInput" className="dropzone-label">
              <span className="dz-icon" aria-hidden>
                🖼️
              </span>
              <span className="dz-text">Click or drag an image here</span>
              <span className="dz-hint">PNG, JPG up to 5MB</span>
            </label>
          </div>
          <div className="field-group">
            <label htmlFor="caption" className="field-label">
              Caption
            </label>
            <textarea
              id="caption"
              maxLength={240}
              placeholder="Write a short caption..."
              className="caption-input"
              rows={3}
            />
            <div className="char-count" aria-live="polite">
              0/240
            </div>
          </div>
          <div className="actions">
            <button type="reset" className="btn btn-ghost">
              Reset
            </button>
            <button type="submit" className="btn btn-primary">
              Post
            </button>
                  </div>
                  
        </form>
      </section>
    </main>
  );
};

export default Home;
