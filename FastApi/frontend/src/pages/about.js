import React, { useEffect, useState } from "react";

function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/aboutus")
      .then((res) => res.json())
      .then((data) => setData(data.aboutus))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container my-5 text-center">
      <h2 className="text-success fw-bold">{data.title}</h2>
      <p className="lead text-secondary">{data.description}</p>

      <h3 className="mt-5">Our Team</h3>
      <div className="row justify-content-center">
        {data.team.map((member, index) => (
          <div className="col-md-3 mb-3" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;
