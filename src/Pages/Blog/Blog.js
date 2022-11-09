import React from "react";
import { FaArrowRight } from "react-icons/fa";
import useTitle from "../../Hooks/useTitle";
import "./Blog.css";

const Blog = () => {
  useTitle("Blog");

  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <h1 className="text-5xl text-center mb-10 mt-10 services-header font-bold">
        Blog
      </h1>
      <div className="p-5 bg-slate-900 text-white shadow-2xl rounded-lg text-start blog-container mb-10">
        <h1 className="text-2xl mb-5 italic">
          Difference between SQL and NoSQL.
        </h1>
        <p className="text-xl flex">
          <FaArrowRight className="mt-1 mr-3 text-xl" /> There are some notable
          differences between SQL and NoSQL. <br />
          SQL has been around for over 40 years, so it is recognizable,
          documented, and widely-used. Safe and versatile, it’s particularly
          well suited for complex queries. However, SQL restricts the user to
          working within a predefined tabular schema, and more care must be
          taken to organize and understand the data before it is used. <br />
          <br />
          The dynamic schemata of NoSQL databases allow representation of
          alternative structures, often alongside each other, encouraging
          greater flexibility. There is less emphasis on planning, greater
          freedom when adding new attributes or fields, and the possibility of
          varied syntax across databases. As a group, however, NoSQL languages
          lack the standard interface which SQL provides, so more complex
          queries can be difficult to execute.
        </p>
      </div>
      <div className="p-5 bg-slate-900 text-white shadow-2xl rounded-lg text-start blog-container mb-10">
        <h1 className="text-2xl mb-5 italic">
          What is JWT, and how does it work?
        </h1>
        <p className="text-xl flex">
          <FaArrowRight className="mt-1 mr-3 text-xl" /> JSON Web Token (JWT) is
          an open standard (RFC 7519) that defines a compact and self-contained
          way for securely transmitting information between parties as a JSON
          object. This information can be verified and trusted because it is
          digitally signed. JWTs can be signed using a secret (with the HMAC
          algorithm) or a public/private key pair using RSA or ECDSA. <br />
          <br />
          In authentication, when the user successfully logs in using their
          credentials, a JSON Web Token will be returned. Since tokens are
          credentials, great care must be taken to prevent security issues. In
          general, you should not keep tokens longer than required. You also
          should not store sensitive session data in browser storage due to lack
          of security. Whenever the user wants to access a protected route or
          resource, the user agent should send the JWT, typically in the
          Authorization header using the Bearer schema. The content of the
          header should look like the following: <br />
          Authorization: Bearer{" "}
        </p>
      </div>
      <div className="p-5 bg-slate-900 text-white shadow-2xl rounded-lg text-start blog-container mb-10">
        <h1 className="text-2xl mb-5 italic">
          What is the difference between javascript and NodeJS?
        </h1>
        <p className="text-xl flex">
          <FaArrowRight className="mt-1 mr-3 text-xl" />
          <ul>
            <li>
              Javascript is a programming language that is used for writing
              scripts on the website. NodeJS is a Javascript runtime
              environment.
            </li>
            <li>
              {" "}
              Javascript can only be run in the browsers. We can run Javascript
              outside the browser with the help of NodeJS.
            </li>
            <li>
              Javascript is capable enough to add HTML and play with the DOM.
              Nodejs does not have capability to add HTML tags.
            </li>
            <li>
              Javascript can run in any browser engine as like JS core in safari
              and Spidermonkey in Firefox. V8 is the Javascript engine inside of
              node.js that parses and runs Javascript.{" "}
            </li>
          </ul>
        </p>
      </div>
      <div className="p-5 bg-slate-900 text-white shadow-2xl rounded-lg text-start blog-container mb-10">
        <h1 className="text-2xl mb-5 italic">
          How does NodeJS handle multiple requests at the same time?
        </h1>
        <p className="text-xl flex">
          <FaArrowRight className="mt-1 mr-3 text-xl" /> NodeJS receives
          multiple client requests and places them into EventQueue. NodeJS is
          built with the concept of event-driven architecture. NodeJS has its
          own EventLoop which is an infinite loop that receives requests and
          processes them. EventLoop is the listener for the EventQueue. <br />
          <br />
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
