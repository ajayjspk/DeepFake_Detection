import React, { useState } from 'react';
import './Styles/css.css';
import uploadFile from './UploadFile';
import Load from '../assets/load.gif';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [plantInfo, setPlantInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setIsLoading(true);
    const Data = await uploadFile(file);
    setIsLoading(false);

    setPlantInfo(Data);
  };

  const myStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '30px'
  };

  const loadingStyle = {
    width: '50px',
    alignItems: 'center',
    marginLeft:'50%',
    translate:'-25%'
  };
  const paraStyle={
    fontWeight:'400'
  }

  return (
    <div style={myStyle}>
      <form onSubmit={handleSubmit}>
        <div className="upload-container">
          <input type="file" id="file-upload" onChange={handleFileChange} />
          <label htmlFor="file-upload">
            <span>Choose File</span>
            <span id="file-name"></span>
          </label>
        </div>
        <input type="submit" />
      </form>
      <div className="spacing"></div>
      {isLoading && (
        <div className="loading-animation">
          <img style={loadingStyle} src={Load} alt="Loading" />
          {isLoading && fileName && <p style={paraStyle} >Uploaded File: {fileName}</p>}
        </div>
      )}
      {!isLoading && plantInfo && <h1>{plantInfo}</h1>}
    </div>
  );
}

export default FileUpload;


// import React, { useState } from 'react';
// import './Styles/css.css';
// import uploadFile from './UploadFile';
// import Load from '../assets/load.gif';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);
//   const [plantInfo, setPlantInfo] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!file) return;

//     setIsLoading(true);
//     const Data = await uploadFile(file);
//     setIsLoading(false);

//     setPlantInfo(Data);
//   };

//   const myStyle = {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     marginBottom: '30px'
//   };
// const loading={
//   width:'50px'
// }

//   return (
//     <div style={myStyle}>
//       <form onSubmit={handleSubmit}>
//         <div className="upload-container">
//           <input type="file" id="file-upload" onChange={handleFileChange} />
//           <label htmlFor="file-upload">
//             <span>Choose File</span>
//             <span id="file-name"></span>
//           </label>
//         </div>
//         <input type="submit" />
//       </form>
//       <div className="spacing"></div>
//       {isLoading && <div className="loading-animation"><img style={loading} src={Load} alt="" /></div>}
//       {/* {isLoading && <div className="loading-animation">Uploading...</div>} */}
//       {!isLoading && plantInfo && <h1>{plantInfo}</h1>}
//     </div>
//   );
// }

// export default FileUpload;

