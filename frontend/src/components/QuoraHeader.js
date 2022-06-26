import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
// import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import WhatshotOutlinedIcon from '@material-ui/icons/WhatshotOutlined';
import {Link} from "react-router-dom";
import {
  // AssignmentTurnedInOutlined,
  // Close,
  // NotificationsOutlined,
  PeopleAltOutlined,
  Search
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { logout, selectUser } from "../feature/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import CheckIcon from '@material-ui/icons/Check';
// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

// import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     '& > * + *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));
function QuoraHeader() {
  // const classes = useStyles();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");
  const Close = <CloseIcon />;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = {
        questionName: question,
        questionUrl: inputUrl,
        user: user,
      };
      await axios
        .post("/api/questions", body, config)
        .then((res) => {
          //console.log(res.data);
          alert(res.data.message);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Error in adding question");
        });
    }
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout ?")) {
      signOut(auth)
        .then(() => {
          dispatch(logout());
          console.log("Logged out");
        })
        .catch(() => {
          console.log("error in logout");
        });
    }
  };

	function isValidHttpUrl(string) {
		let url;
		try {
			url = new URL(string);
		} catch (_) {
			return false;  
		}
		return url.protocol === "http:" || url.protocol === "https:";
	}

  return (
    
    <div className="qHeader">
      <div className="qHeader-content">
        <div className="qHeader__logo">
          <img
            src="https://th.bing.com/th/id/R.823d07385a1376cda8f3f452b8625c77?rik=%2bkl9apNFOD1kmA&riu=http%3a%2f%2fclipartmag.com%2fimages%2fquestion-mark-cartoon-clipart-29.png&ehk=p9Us7%2bc%2b3%2bTZ5cyI0g%2fmK3VTQgytE9PTnYQupYk8yLA%3d&risl=&pid=ImgRaw&r=0"
            alt="logo"
            style={{height:"100px",width:"100px"}}
          />
        </div>
        <div className="qHeader__icons">
          <div className="qHeader__icon">
           <Link className="hot" to="/">
            <HomeIcon fontSize="large" />
           </Link> 
          </div>
         
          <div className="qHeader__icon">
						<Link className="hot" to="/trending">
							<WhatshotOutlinedIcon fontSize="large"/>
						</Link>
          </div>
         
         
        </div>
        <div className="qHeader__input">
          <Search />
          <input type="text" placeholder="Search coming soon" disabled />
        </div>
        <div className="qHeader__Rem">
          <span>
            <Avatar style={{"border": "1px solid gray"}} src={user?.photo} />
          </span>
          <Button onClick={handleLogout}>Log Out</Button>
          <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            
            closeOnEsc
            center
            closeOnOverlayClick={false}
            // styles={{
            //   overlay: {
            //     height: "auto",
            //   },
            // }}
          >
            <div className="modal__title">
              <h4>Add Question</h4>

            </div>
            <div className="modal__info">
              <Avatar src={user?.photo} className="avatar" />
              <div className="modal__scope">
                &ensp;
								<PeopleAltOutlined />
                <p>&nbsp;Public&ensp;</p>
              </div>
            </div>
            <div className="modal__Field">
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                type=" text"
                placeholder="Start your question with 'What', 'How', 'Why', etc. "
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  style={{
                    "margin": "5px 0",
                    "border": "1px solid gray",
                    "padding": "10px",
										"borderRadius": "3px"
                    // outline: "2px solid #000",
                  }}
                  placeholder="Link to image to give more context (optional)"
                />
                {isValidHttpUrl(inputUrl) && (
                  <img
                    style={{
                      height: "40vh",
                      objectFit: "contain",
                    }}
                    src={inputUrl}
                    alt="displayimage"
                  />
                )}
              </div>
            </div>
            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button onClick={handleSubmit} type="submit" className="add">
                Add Question
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
