function User(props) {
    return (
    <div className='card-container'>
    <span className={props.online ? "pro online" : "pro offline"}>{props.online? "online":"offlie"}</span>
    <img src={props.profile} alt="hii" className='img'  />
    <h3>{props.name}</h3>
    <h4>{props.city}</h4>
    <p>{props.disper}</p>
    <div className='buttons'>
       <button className='primary'>Message</button>
       <button className='primary outline'>following</button>
      </div>
      <div className='skills'>
          <h2 >skills </h2>
          <ul>
              {props.skills.map((skills,index)=>(
                <li key={index}>{skills}</li>
              ))}
          </ul>
      </div>
  </div>
)
  }
  

function UserCard() {
  return (
    <div>
      
      <User name="A.Elumalai" city="Tiruvannmalai" 
    disper="fort end develper" skills={["UI/UX","Front end developer","HTML",'CSS','javascript',"react"]}  Online={true} profile="photo/op.webp"/>
    
     <User name="A.Elumalai" city="Tiruvannmalai" 
     disper="fort end develper" skills={["UI/UX","Front end developer","HTML",'CSS','javascript',"react"]}  Online={true} profile="photo/op.webp"/>

     <User name="A.Elumalai" city="Tiruvannmalai" 
     disper="fort end develper" skills={["UI/UX","Front end developer","HTML",'CSS','javascript',"react"]}  Online={true} profile="photo/op.webp"/>
  
     <User name="A.Elumalai" city="Tiruvannmalai" 
     disper="fort end develper" skills={["UI/UX","Front end developer","HTML",'CSS','javascript',"llllllllllllll","react","react"]}  Online={true} profile="photo/op.webp"/>
     </div>
  );
};

export default UserCard
