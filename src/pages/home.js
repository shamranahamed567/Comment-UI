import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <article class="section-article">
          <div class="completed-comment-section">
            <div class="container">
              <h1 class="primary-heading">Discussion</h1>
              <div class="input-box">
                <img
                  class="profile-img"
                  src="assets/img/rob.png"
                  alt="Profile Picture of Rob Hope"
                />
                <input
                  class="input-field"
                  type="text"
                  placeholder="What are your thoughts?"
                />
                <button href="#" class="btn">
                  Comment
                </button>
              </div>
            </div>

            <div class="comment-section">
              <div class="container-box margin-top">
                <div class="image-box">
                  <img
                    class="profile-img"
                    src="assets/img/rob.png"
                    alt="Profile Picture of Rob Hope"
                  />
                </div>
                <div class="comment-text-box">
                  <h2 class="secondary-heading">
                    Rob Hope
                    <span>• 45 min ago</span>
                  </h2>
                  <p class="comment-text">
                    Jeepers now that's a huge release with some big community
                    earning to back it - it must be so rewarding seeing creators
                    quit their day jobs after monitizing(with real MRR) on the
                    new platform.
                  </p>
                  <ul class="list-items">
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        <ion-icon name="caret-up-outline"></ion-icon> Upvote
                      </a>
                    </li>
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        Reply
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="comment-section">
              <div class="container-box margin-top-comment">
                <div class="image-box">
                  <img
                    class="profile-img"
                    src="assets/img/sophie.png"
                    alt="Profile Picture of Sophie Brecht"
                  />
                </div>
                <div class="comment-text-box border-left">
                  <h2 class="secondary-heading">
                    Sophie Brecht
                    <span>• Yesterday</span>
                  </h2>
                  <p class="comment-text">
                    Switched our blog from Hubspot to Ghost a year ago == turned
                    out to be a great decision. Looking forward to this
                    update...the in-platform analytics look especially
                    delicious. :)
                  </p>
                  <ul class="list-items">
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        <ion-icon name="caret-up-outline"></ion-icon> Upvote
                      </a>
                    </li>
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        Reply
                      </a>
                    </li>
                  </ul>

                  <div class="comment-section">
                    <div class="container-box margin-top-text">
                      <div class="image-box">
                        <img
                          class="profile-img"
                          src="assets/img/james.png"
                          alt="Profile Picture of James"
                        />
                      </div>
                      <div class="comment-text-box">
                        <h2 class="secondary-heading">
                          James
                          <span>• 2 hours ago</span>
                        </h2>
                        <p class="comment-text">
                          Thanks Sophie! Last year has been an absolute goldrush
                          for the creator economy. Slowly at first, then all at
                          once. Will be interesting to see how this ecosystem
                          evolves over the next few years
                        </p>
                        <ul class="list-items">
                          <li class="list-item">
                            <a href="#" class="link-tag">
                              <ion-icon name="caret-up-outline"></ion-icon>
                              Upvote
                            </a>
                          </li>
                          <li class="list-item">
                            <a href="#" class="link-tag">
                              Reply
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="comment-section">
              <div class="container-box margin-top-comment">
                <div class="image-box">
                  <img
                    class="profile-img"
                    src="assets/img/cameron.png"
                    alt="Profile Picture of Cameron Lawrencee"
                  />
                </div>
                <div class="comment-text-box">
                  <h2 class="secondary-heading">
                    Cameron Lawrence
                    <span>• 3 weeks ago</span>
                  </h2>
                  <p class="comment-text">
                    Love the native memberships and the zipless themes, I was
                    just asked by a friend about options for a new site, and I
                    think I know what I'll be recommending then...
                  </p>
                  <ul class="list-items">
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        <ion-icon name="caret-up-outline"></ion-icon> Upvote
                      </a>
                    </li>
                    <li class="list-item">
                      <a href="#" class="link-tag">
                        Reply
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Home;
