import {React,useState} from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import styled from "styled-components";
import Spline from "@splinetool/react-spline";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import ContactsIcon from "@mui/icons-material/Contacts";
import HomeIcon from "@mui/icons-material/Home";
import {useTranslation} from "react-i18next";
import i18next from "i18next";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'
import axios from "axios";
import LoginIcon from '@mui/icons-material/Login';


export default function Register(props) {
  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const navigate=useNavigate()
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
      const {
        username,
        email,
        phone_number,
        about,
        isseller,
        password,
        address
      } = values;
      const district=props.location.city
      const state=props.location.region
      const { data } = await axios.post("http://127.0.0.1:8000/register/", {
        username,
        email,
        phone_number,
        about,
        isseller,
        password,
        address,
        district,
        state
      });
      console.log(data)
      if(data.status===400){
        toast.error(data.data.msg)
      }else{
        toast.success(data.msg,toastobj)
        setvalues({
          username: "",
          phone_number: "",
          email: "",
          about:"",
          isseller:"",
          password:"",
          address:"",
          
        })

        resetTranscript()
        navigate('/',{state:{'username':username,'password':password}})
      }
  };
  const toastobj = {
    position: "top-center",
    autoClose: 6000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handlechange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value});
    console.log(values);
    SpeechRecognition.stopListening()
  };

  const [values, setvalues] = useState({
    username: "",
    phone_number: "",
    email: "",
    about:"",
    isseller:"",
    password:"",
    address:""
  });
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    // <div><p>Microphone: {listening ? 'on' : 'off'}</p>
    // <button onClick={SpeechRecognition.startListening}>Start</button>
    // <button onClick={SpeechRecognition.stopListening}>Stop</button>
    // <button onClick={resetTranscript}>Reset</button>
    // <p>{transcript}</p></div>
    <Maincomponent>
      <ToastContainer />
      <Leftregister>
        <Spline
          scene="https://prod.spline.design/I3dx1vVMZy55sFuC/scene.splinecode"
          style={{ display: "block", width: "100%", height: "100%" ,borderRadius: "2rem"}}
        />
      </Leftregister>
      <Rightregister>
        <div className="selectlanguage">
            <select onChange={(e) => handleClick(e)}>
                <option>Select Language</option>
                <option value={'en'}>English</option>
                <option value={'ko'}>Korean</option>
                <option value={'chi'}>Chinese</option>
                <option value={'hi'}>Hindi</option>
            </select>
        </div>
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter your username')}
          name='username'
          className='registertext'
          color="warning"
          value={values.username?values.username:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          // onChange={}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <BadgeIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter your email')}
          className='registertext'
          name='email'
          value={values.email?values.email:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter your password')}
          className='registertext'
          name="password"
          value={values.password?values.password:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter your phone number')}
          className='registertext'
          name="phone_number"
          value={values.phone_number?values.phone_number:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactsIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter your address')}
          className='registertext'
          name="address"
          value={values.address?values.address:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <TextField
          id="input-with-icon-textfield"
          label={t('Enter about yourself')}
          className='registertext'
          name="about"
          value={values.about?values.about:transcript}
          onFocus={SpeechRecognition.startListening}
          onBlur={(e) => handlechange(e)}
          color="warning"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HomeIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <FormControlLabel name="isseller" control={<Checkbox />} onChange={(e) => handlechange(e)} label={t('Want to be seller ?')} />
        <Registersubmit onClick={(e) => handlesubmit(e)}>
          Submit
        </Registersubmit>
        <Link onClick={(e)=>{
          e.preventDefault()
          props.setlogin(true)
        }} className='tologin'>already registered? Login here <LoginIcon /></Link>
      </Rightregister>
    </Maincomponent>
  );
}


const Maincomponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80%;
  background-color: RGB(43, 50, 178);
  color: white;
  font-size: larger;
  border-radius: 2rem;
 .tologin{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;
const Leftregister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;
const Rightregister = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .registertext{
    width: 80%;
    color: white;
  }
  .registertext svg{
    color: white;
  }
  .registertext label{
    color: white;
  }
  .selectlanguage{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
  .selectlanguage select{
    width: 80%;
    padding: 1rem;
  }
`;
const Registersubmit=styled.button`
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-weight: bold;
  background-color: #FF76E0;
  border: none;
  color: white;
`