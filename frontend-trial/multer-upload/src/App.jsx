import { useState } from 'react'
import './App.css'

function App() {
  const [image, setImage] = useState(null);
  const [allImage, setAllImage] = useState(null);
  function submitImage(event) {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("photo", image);
  
    // Add any additional data to the formData object as needed
    formData.append("name", "Some Product Name");  // Example of additional data
    // Add other fields similarly
  
    fetch("http://localhost:3026/api/v1/stocks/", {
      method: "POST",
      body: formData,  // No need to manually set Content-Type
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  

  function onInputChange(event)
  {
    setImage(event.target.files[0]);
  }
  return (
    <>
    <div>
      <form onSubmit={submitImage}>
        <input type="file" accept="image/*" onChange={onInputChange}></input>
        <button type="submit">Submit</button>
      </form>
    </div>*/
    </>
  )
}

export default App
