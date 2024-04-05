import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { postList, removePost } from './redux/post/postSlice';
import Feedback from './components/Feedback';

function App() {
  const [posts, setPosts] = useState([]);
  const [cardColor, setCardColor] = useState('light')
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const dispatch = useDispatch();

  const postState = useSelector(state => state.posts.posts);
  const date = new Date().toLocaleString();


  //remove the post
  const handleRemovePost = (id) => {
    dispatch(removePost(id));
    setPosts(postState)
  }


  // fetch post data from the api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
        dispatch(postList(response.data));
      } catch (error) {

      }
    }
    setTimeout(fetchData, 5000)
  }, [])


  return (
    <div className="container m-3">
      <Feedback show={showFeedbackForm} setShow={setShowFeedbackForm} />
      <div className='card main-card-height m-auto' style={{ height: "90vh", width: '90vw' }} >
        <div className='container my-4 '>
          {
            posts.length > 0 ?
              <div className='row'>
                <div className='col-3'>
                  <div class="card  " style={{ height: "75vh" }}>
                    <div className='card m-1'>
                      <div class="card-body d-flex flex-column justify-content-center">
                        <div className='row'>
                          <div className='col-4'>
                            <img src="https://in.images.search.yahoo.com/images/view;_ylt=Awr1QLpOwg9m3Xsd0BK9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzYxYjI4MDc3ODBhN2IzNTAwOGMwMGI1MzkyMDFkNzg0BGdwb3MDMTYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogin%2Bimage%2Bicon%26ei%3DUTF-8%26vm%3Dr%26type%3DE210IN714G0%26fr%3Dmcafee%26h%3D1024%26tt%3DKey%252C%2Blog%2Bin%252C%2Bpassword%252C%2Bregister%252C%2Bsecure%252C%2Bsecurity%252C%2Buser%2Blogin%2Bicon%2B...%26w%3D1024%26imgurl%3Dhttps%253A%252F%252Fcdn2.iconfinder.com%252Fdata%252Ficons%252Fflat-style-svg-icons-part-1%252F512%252Fuser_login_man-1024.png%26rurl%3Dhttps%253A%252F%252Fwww.iconfinder.com%252Ficons%252F170554%252Fkey_log_in_password_register_secure_security_user_login_icon%26turl%3Dhttps%253A%252F%252Ftse1.mm.bing.net%252Fth%253Fid%253DOIP.fio1nXsUCvmMVKmVqHO0cgHaHa%2526pid%253DApi%2526rs%253D1%2526c%253D1%2526qlt%253D95%2526w%253D123%2526h%253D123%26tw%3D123.3%26th%3D123.3%26sigr%3DJmbGOluakWHo%26sigi%3DZJehr7c.dhSo%26sigt%3DDS1RxuJemNzZ%26sigit%3DbEQ4B.KWJfOW%26tab%3Dorganic%26ri%3D16&w=840&h=880&imgurl=www.clipartmax.com%2Fpng%2Fmiddle%2F15-153139_big-image-login-icon-with-transparent-background.png&rurl=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8K9b1N4H7K9i8_big-image-login-icon-with-transparent-background%2F&size=82.2KB&p=login+image+icon&oid=61b2807780a7b35008c00b539201d784&fr2=&fr=mcafee&tt=Big+Image+-+Login+Icon+With+Transparent+Background+-+Free+Transparent+...&b=0&ni=21&no=16&ts=&vm=r&tab=organic&sigr=os5QIyIPBz7K&sigb=6EHpQ6ji67qD&sigi=cnepeUbGHuc9&sigt=7y3ROA3tlHTr&.crumb=r7KeP0A.X6G&fr=mcafee&type=E210IN714G0&vm=r" class="rounded me-2" alt="..." />
                          </div>
                          <div className='col-8'>
                            <h5 class="card-title">Hi Reader</h5>
                            <p class="card-text">Here's your News</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='card m-1'>
                      <div class="card-body ">
                        <h3 class="card-title">View Toogle</h3>
                        <div class="btn-group" role="group" aria-label="Basic example">
                          <button type="button" class="btn btn-primary" onClick={() => { setCardColor("light") }}>Light</button>
                          <button type="button" class="btn btn-info" onClick={() => { setCardColor("info") }}>Dark</button>
                        </div>
                      </div>
                    </div>
                    <div className='card m-1'>
                      <div class="card-body">
                        <h5 class="card-title">Have a feedback?</h5>
                        <button type="button" class="btn btn-primary" onClick={() => { setShowFeedbackForm(true) }}>We Are Lisining</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-9'>
                  {posts.map((post, index) => {
                    return (
                      <div className={`card bg-${cardColor} m-1`} key={index}>
                        <div className="card-body">
                          <div className='row align-items-center'>
                            <div className='col-2'>
                              <img src="https://in.images.search.yahoo.com/images/view;_ylt=Awr1QLpOwg9m3Xsd0BK9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzYxYjI4MDc3ODBhN2IzNTAwOGMwMGI1MzkyMDFkNzg0BGdwb3MDMTYEaXQDYmluZw--?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dlogin%2Bimage%2Bicon%26ei%3DUTF-8%26vm%3Dr%26type%3DE210IN714G0%26fr%3Dmcafee%26h%3D1024%26tt%3DKey%252C%2Blog%2Bin%252C%2Bpassword%252C%2Bregister%252C%2Bsecure%252C%2Bsecurity%252C%2Buser%2Blogin%2Bicon%2B...%26w%3D1024%26imgurl%3Dhttps%253A%252F%252Fcdn2.iconfinder.com%252Fdata%252Ficons%252Fflat-style-svg-icons-part-1%252F512%252Fuser_login_man-1024.png%26rurl%3Dhttps%253A%252F%252Fwww.iconfinder.com%252Ficons%252F170554%252Fkey_log_in_password_register_secure_security_user_login_icon%26turl%3Dhttps%253A%252F%252Ftse1.mm.bing.net%252Fth%253Fid%253DOIP.fio1nXsUCvmMVKmVqHO0cgHaHa%2526pid%253DApi%2526rs%253D1%2526c%253D1%2526qlt%253D95%2526w%253D123%2526h%253D123%26tw%3D123.3%26th%3D123.3%26sigr%3DJmbGOluakWHo%26sigi%3DZJehr7c.dhSo%26sigt%3DDS1RxuJemNzZ%26sigit%3DbEQ4B.KWJfOW%26tab%3Dorganic%26ri%3D16&w=840&h=880&imgurl=www.clipartmax.com%2Fpng%2Fmiddle%2F15-153139_big-image-login-icon-with-transparent-background.png&rurl=https%3A%2F%2Fwww.clipartmax.com%2Fmiddle%2Fm2i8K9b1N4H7K9i8_big-image-login-icon-with-transparent-background%2F&size=82.2KB&p=login+image+icon&oid=61b2807780a7b35008c00b539201d784&fr2=&fr=mcafee&tt=Big+Image+-+Login+Icon+With+Transparent+Background+-+Free+Transparent+...&b=0&ni=21&no=16&ts=&vm=r&tab=organic&sigr=os5QIyIPBz7K&sigb=6EHpQ6ji67qD&sigi=cnepeUbGHuc9&sigt=7y3ROA3tlHTr&.crumb=r7KeP0A.X6G&fr=mcafee&type=E210IN714G0&vm=r" class="rounded me-2" alt="..." />
                            </div>
                            <div className='col-8'>
                              <h5 class="card-title">{post.title}</h5>
                              <p class="card-text">{post.body}</p>
                              <p class="card-text">{date}</p>
                            </div>
                            <div className='col-2'>
                              <button type="button" class="btn-close" aria-label="Close" onClick={() => { handleRemovePost(post.id) }}></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}

                </div>

              </div> : <div className='d-flex justify-content-center mt-5'>
                <div class="spinner-border" role="status">
                </div>
              </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App;
