import React from "react";
import "./content.css";

const Content = () => {
  return (
    <div className="content-container">
      <section className="overview">
        <h2>Overview</h2>
        <p>
          The Asian American and Pacific Islander (AAPI) community is facing a
          number of challenges, including increased hate crimes, discrimination,
          and lack of representation. These challenges can be overwhelming, and
          it can be difficult to know where to start to help.
        </p>
      </section>
      <section className="problem-statement">
        <h2>Problem Statement</h2>
        <p>
          There are many challenges that prevent the AAPI community and our
          allies from taking concrete actions to fight against the form of hate
          and discrimination we are facing:
          <ul>
            <li>
              Lack of community and inspiration: Many people feel isolated and
              alone in their fight against hate and discrimination. They may not
              know where to turn for support or inspiration.
            </li>
            <li>
              Lack of time: People are busy with work, school, and family
              obligations. They may not have the time to commit to a large-scale
              project.
            </li>
            <li>
              Lack of ideas: People may not know what they can do to help. They
              may not know where to start or how to make a difference.
            </li>
            <li>
              Lack of transparency: People may not know how their efforts are
              making a difference. They may not know if their work is actually
              helping the AAPI community.
            </li>
          </ul>
        </p>
      </section>
      <section className="proposal">
        <h2>Proposal</h2>
        <p>
          Project Together is a mobile app that connects people who want to
          support the AAPI community. With Project Together, users can:
          <ul>
            <li>
              Find a community of people who share their passion for supporting
              the AAPI community.
            </li>
            <li>Easily find and join projects that are already underway.</li>
            <li>
              Propose their own projects and find volunteers to help them
              implement them.
            </li>
          </ul>
        </p>
        <p>
          In addition to the core features listed above, Project Together will
          also include the following features:
          <ul>
            <li>
              A way to track progress and impact. It would be great to be able
              to see how much progress is being made on each project, and how
              the project is impacting the AAPI community. This would help to
              motivate volunteers and keep them engaged.
            </li>
            <li>
              A way to connect with other volunteers. It would be great to be
              able to connect with other volunteers who are working on similar
              projects. This could lead to collaboration and new ideas.
            </li>
            <li>
              A way to share stories and experiences. It would be great to be
              able to share stories and experiences of volunteering. This would
              help to inspire others and build a sense of community.
            </li>
          </ul>
          <p>
            We believe that Project Together has the potential to make a real
            difference in the AAPI community. By connecting people who want to
            support the AAPI community, we can help to create a more inclusive
            and supportive society for all.
          </p>
        </p>
      </section>
      <section className="get-involved">
        <h2>How to Get Involved</h2>
        <p>
          If you are interested in getting involved in Project Together, there
          are a few things you can do:
          <ul>
            <li>
              Visit our website and sign up for our newsletter to stay
              up-to-date on our progress.
            </li>
            <li>
              Follow us on social media and share our posts with your friends
              and family.
            </li>
            <li>
              Donate to our project to help us cover the costs of development
              and maintenance.
            </li>
            <p>We appreciate your support!</p>
            <p>
              Project Together has the potential to make a real difference in
              the AAPI community. It will help to connect people who want to
              support the AAPI community and make a difference, and it will make
              it easier for people to find ways to help.
            </p>
          </ul>
        </p>
      </section>
    </div>
  );
};

export default Content;
