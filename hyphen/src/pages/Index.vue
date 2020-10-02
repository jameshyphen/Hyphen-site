<template>
  <div class="fullscreen">
    <div
      id="pt"
      class="superimposed fullscreen"
      style="pointer-events: all"
    ></div>

    <div
      style="
        width: 100vw;
        padding-top: 15vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
      "
      class="superimposed"
    >
      <h1 id="header-text"></h1>
    </div>

    <div
      style="
        width: 100vw;
        padding-top: 40vh;
        display: flex;
        align-items: center;
        justify-content: center;
      "
      class="superimposed"
    >
      <p id="typed"></p>
    </div>
    <div
      style="
        width: 100vw;
        padding-top: 45vh;
        display: flex;
        align-items: center;
        justify-content: center;
      "
      class="superimposed"
    >
      <p id="typed2"></p>
    </div>

    <div
      style="
        width: 100vw;
        padding-top: 60vh;
        display: flex;
        align-items: center;
        justify-content: space-around;
      "
      class="superimposed"
    >
      <!-- <a href="/about" style="color: inherit; text-decoration: none;"><button class="btn">About</button></a>

      <a href="/projects" style="color: inherit; text-decoration: none;"><button class="btn">Projects</button></a>

      <a href="/cv" style="color: inherit; text-decoration: none;"><button class="btn">CV</button></a> -->
      <!-- <a href="/about" id="hyphen-button">(-)</a> -->
    </div>

    <div
      style="
        padding-top: 80vh;
        width: 100vw;
        display: flex;
        justify-content: center;
      "
      class="superimposed"
    >
      <a id="bottom-button" href="/about">
        <g-image
          src="~/assets/prof_sq.png"
          style="
            height: 50px;
            width: 50px;
            border-radius: 50%;
            border: 2px white solid;
          "
          alt="Me"
        />

        <p
          style="
            padding-top: 13px;
            font-size: 1em;
            padding-left: 12px;
            padding-top: 16px;
          "
        >
          James "Dzhem" Hyphen
        </p>
      </a>
    </div>
  </div>
</template>


<script>
import Typed from "typed.js";
import {
  Pt,
  Group,
  CanvasSpace,
  Geom,
  Curve,
  Form,
  VisualForm,
  Const,
  Line,
} from "pts";

export default {
  metaInfo: {
    title: "Company Website",
    meta: [
      {
        name: "description",
        content:
          "Curiosity - Creativity - Contribution. Software and Machine Learning Engineering.",
      },
      { property: "og:title", content: "Theodoros Ntakouris" },
      { property: "og:type", content: "website" },
    ],
  },
  mounted: function () {
    new Typed("#typed", {
      strings: ["Software Engineering"],
      typeSpeed: 20,
      startDelay: 1500,
      loop: false,
      showCursor: false,
    });
    new Typed("#typed2", {
      strings: ["Python", "Vue", "C# ASP.NET", "Java", "Angular"],
      typeSpeed: 30,
      startDelay: 2500,
      loop: true,
      showCursor: false,
    });
    var space = new CanvasSpace("#pt");
    space.setup({ bgcolor: "black" });

    var form = space.getForm();
    var pairs = [];

    space.add({
      start: (bound) => {
        let r = space.size.minValue().value / 2;

        // create 200 lines
        for (let i = 0; i < 200; i++) {
          let ln = new Group(Pt.make(2, r, true), Pt.make(2, -r, true));
          ln.moveBy(space.center).rotate2D((i * Math.PI) / 200, space.center);
          pairs.push(ln);
        }
      },

      animate: (time, ftime) => {
        for (let i = 0, len = pairs.length; i < len; i++) {
          // rotate each line by 0.1 degree and check collinearity with pointer
          let ln = pairs[i];
          ln.rotate2D(Const.one_degree / 10, space.center);
          let collinear = Line.collinear(ln[0], ln[1], space.pointer, 0.1);

         
          // if not collinear, color the line based on whether the pointer is on left or right side
          let side = Line.sideOfPt2D(ln, space.pointer);
          form
            .stroke(side < 0 ? "rgba(255,255,0,.1)" : "rgba(0,255,255,.1)")
            .line(ln);
          form.fillOnly("rgba(255,255,255,0.8").points(ln, 0.5);
        }

      },
    });

    space.bindMouse().bindTouch().play();
  },
};
</script>

<style scoped>
#header-text {
  pointer-events: all;
  padding: 8px;
  padding-top: 9px;
}

#header-text:after {
  content: "(-)yphen";
}

#header-text:hover {
  background-color: white;
  cursor: pointer;
  padding-top: 8px;
  color: black;
}

#header-text:hover:after {
  content: "Software";
}

#header-text:active:after {
  content: "Engineering";
}

#bottom-button {
  box-sizing: border-box;
  pointer-events: all;
  display: flex;
  justify-content: center;
  padding: 8px;
  padding-top: 9px;
  text-decoration: none;
}

html,
body {
  height: 100vh;
  width: 100vh;
  margin: 0;
}

.fullscreen {
  width: 100vw;
  height: 100vh;
  background-color: #112233;
}

.superimposed {
  position: absolute;
  z-index: 1;
}

.b {
  pointer-events: all;
  position: absolute;
  top: 66%;
  left: 20%;
  width: 200px;
}

.btn {
  background-color: transparent;
  border: 1px solid white;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 28px;
  padding: 16px 31px;
  text-decoration: none;
  background-size: 200% 100%;
  background-image: linear-gradient(to right, white 50%, #112233 50%);
  transition: background-position 0.2s ease-in-out;
  width: 200px;
  pointer-events: all;
  background-position: 100% 0;
}

.btn:hover {
  background-position: 0 0;
  color: #112233;
}

#hyphen-button {
  font-size: 100px;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(to right, white 0%, black 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0% 1% 1% 1%;
}

h1,
div,
p {
  pointer-events: none;
}

h1 {
  font-size: 4em;
  color: white;
}

p {
  font-size: 2em;
  color: white;
}

@media only screen and (max-width: 1068px) {
  h1 {
    font-size: 3.5em;
  }

  p {
    font-size: 2em;
  }

  .btn {
    font-size: 28px;
    width: 180px;
  }
}

@media only screen and (max-width: 937px) {
  h1 {
    font-size: 2.5em;
  }

  p {
    font-size: 1.5em;
  }

  .btn {
    font-size: 20px;
    width: 160px;
  }
}

@media only screen and (max-width: 667px) {
  h1 {
    font-size: 2em;
  }

  p {
    font-size: 1.5em;
  }

  .btn {
    font-size: 16px;
    width: 140px;
  }
}

@media only screen and (max-width: 535px) {
  h1 {
    font-size: 1.5em;
  }

  .btn {
    font-size: 14px;
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1em;
  }

  p {
    font-size: 1em;
  }
}
</style>
