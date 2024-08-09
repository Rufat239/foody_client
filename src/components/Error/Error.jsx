import errorImage from '../../assets/error/error.svg';
import '../../style/error.css' 

function Error() {
  
  
    return (
      <div className='error-found'>
        <figure >
          <img src={errorImage} alt="404 Not Found" /> 
        </figure>
      </div>
    );
  }

  
  


export default Error;
