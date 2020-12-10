import React from "react";
import "./style.css";

function Newsletter() {
  return (
    <div className="newsletter">
      <form>
        <label>Subscribe to our newsletter</label>
        <div>
          <input type="text" placeholder="Email Address" />
          <button>OK</button>
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
