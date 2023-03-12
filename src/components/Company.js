import React from 'react'
import comphero from "../assets/comphero.png"
import logo2 from "../assets/logo2.png"
import cal from "../assets/cal.png"

const Company = () => {

 const handleInterview=(event)=>{
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/job_handle/send-interview/", {
        content: [
          {
            'Content-Type': 'application/json'
          },
        ],
      }, 
      )
      .then((response) => {
        console.log("Email sent successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
 }

 const handleParser=(event)=>{
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/model/skill-extracter/", {
        content: [
          {
            'Content-Type': 'application/json'
          },
        ],
      }, 
      )
      .then((response) => {
        console.log("Email sent successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
 }

    return (
        <div className="bg-[#132C33] w-[1920px] h-[5000px]  flex scrollbar-hide">

            <img className='absolute w-[230px] h-[80px] left-[40px] top-[35px]' src={logo2} alt="logo"></img>
            <div className='bg-[#183740] absolute left-[250px] top-[150px] w-[1000px] h-[450px] rounded-[20px] '>
                <img className='w-[1100px] left-[200px] rounded-[20px]   h-[450px]' src={comphero}></img>
            </div>

            <div className='bg-[#183740] absolute left-[250px] top-[650px] w-[510px] h-[290px] rounded-[20px]' >
                <p className='text-lg font-extrabold text-[30px] pt-[20px] relative pl-[40px] top-[25px] text-[#EFFFFA] leading-7 m-[2px]'>About Us</p>

                <p className='text-[#EFFFFA] text-md p-[40px] leading-7'>Google LLC is an American multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.</p>
            </div>

            <div className='bg-[#183740] absolute left-[830px] top-[650px] w-[410px] h-[420px] mt-[2px] ml-[2px]  mb-[4px] rounded-[20px]' >
                <p className='text-lg font-bold relative pl-[40px] top-[30px] text-[30px] mt-[2px] ml-[2px]  mb-[4px]  text-[#EFFFFA] leading-7'>Jobs</p>
                <div className='text-[#EFFFFA] text-md pt-[50px] pl-[40px] leading-7'>Cloud Engineer</div>
                <p className='font-thin text-white pl-[40px]'>Vacancies: 250</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] leading-7'>Data Engineer</div>
                <p className='font-thin text-white pl-[40px]'>Vacancies: 400</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] left-[10px] leading-7'>Backend Developer</div>
                <p className='font-thin text-white pl-[40px]'>Vacancies: 152</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] left-[10px] leading-7'>Blockchain Developer</div>
                <p className='font-thin text-white pl-[40px]'>Vacancies: 100</p>
            </div>

            <div className='bg-[#183740] absolute left-[250px] top-[1000px] w-[500px] h-[420px] mt-[2px] ml-[2px]  mb-[4px] rounded-[20px]' >
                <p className='text-lg font-bold relative pl-[40px] top-[30px] text-[30px] mt-[2px] ml-[2px]  mb-[4px]  text-[#EFFFFA] leading-7'>Explore</p>
                <div className='text-[#EFFFFA] text-md pt-[50px] pl-[40px] leading-7'>Sundar Pichai</div>
                <p className='font-thin text-white pl-[40px]'>@googleceo</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] leading-7'>Anakani Jackson</div>
                <p className='font-thin text-white pl-[40px]'>@horizon</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] left-[10px] leading-7'>Backend Developer</div>
                <p className='font-thin text-white pl-[40px]'>@shadowdown</p>
                <div className='text-[#EFFFFA] text-md pt-[30px] pl-[40px] left-[10px] leading-7'>Blockchain Developer</div>
                <p className='font-thin text-white pl-[40px]'>@lordofluxury</p>
            </div>
            <div className='bg-[#183740] absolute left-[830px] top-[1140px] w-[440px] h-[360px] mt-[2px] ml-[2px]  mb-[4px] rounded-[20px]' >
                <img className='w-[440px] h-[360px] cursor-pointer ' onClick={handleInterview} src={cal}></img>
            </div>
            <div className='bg-[#183740] absolute left-[250px] top-[1500px] w-[440px] h-[50px] mt-[2px] ml-[2px] text-white font-bold flex items-center justify-center mb-[4px] rounded-[20px] ' onClick={handleParser}>RESUME PARSER</div>
  
    </div >
  )
}

export default Company