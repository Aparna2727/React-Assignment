
import './App.css';
import ProfileCard from './Component/card';

function App() {
// Images
  const imageLink1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtvnSFivTh403IP-jH87o_j-wpQq_1aYqlg&usqp=CAU"

  const imageLink2="https://static.vecteezy.com/system/resources/thumbnails/007/333/763/small/happy-businesswoman-looking-at-camera-outdoor-free-photo.jpg"

  const imageLink3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrL1oAnX9Jmqu6EXRgeMD9zIc-_6wFyIayQ&usqp=CAU"

  //  job descriptions
  const JobDescription1 = "A UI UX designer is a professional who identifies new opportunities to create better user experiences. Aesthetically pleasing branding strategies help them effectively reach more customers."

  const JobDescription2 = "Software developers write code using programming languages, build software components, and test their designs. As a part of software testing, developers address issues or errors."

  const JobDescription3 = "Java developers write code using programming languages, build software components, and test their designs. As a part of software testing, developers address issues or errors."

  // alert Name functions
  function user1(){
    alert("Aryan Shirani")
  }

  function user2(){
    alert("Aparna Sahu")
  }

  function user3(){
    alert("Suyesh Kumar")
  }
  return (
    
    <div className="App">
   <ProfileCard image={imageLink1} designation={"UI/UX DESIGNER"} name = {"Aryan Shirani"}  description={JobDescription1} user={user1} />
   <ProfileCard image={imageLink2} designation={"SOFTWAER DEVELOPER"} name = {"Aparna Sahu"}  description={JobDescription2} user={user2}/>
   <ProfileCard image={imageLink3} designation={"JAVA DEVELOPER"} name = {"Suyesh Kumar"}  description={JobDescription3} user={user3}/>
    </div>
  );
}

export default App;
