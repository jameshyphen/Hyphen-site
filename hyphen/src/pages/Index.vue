<template>
  <div>
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
      <!-- <a href="/about" id="hyphen_2-button">(-)</a> -->
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
    title: "Hyphen",
    meta: [
      {
        name: "description",
        content:
          "Curiosity - Creativity - Contribution. Software Engineering.",
      },
      { property: "og:title", content: "Hyphen Solutions" },
      { property: "og:type", content: "website" },
    ],
  },
  methods:{
    startTypingTopText: function () {
      new Typed("#typed", {
        strings: ["Software Engineering"],
        typeSpeed: 20,
        startDelay: 0,
        loop: false,
        showCursor: false,
      });
    },
      startTypingBottomText: function () {
        new Typed("#typed2", {
          strings: ["Python", "Vue", "C# ASP.NET", "Java", "Angular"],
          typeSpeed: 30,
          startDelay: 0,
          loop: true,
          showCursor: false,
        });
      },
      initializeBackgroundAnimation: function() {
        var space = new CanvasSpace("#pt");
        space.setup({ bgcolor: "black" });

        var form = space.getForm();
        var pairs = [];

        space.add({
          start: (bound) => {
            let r = space.size.minValue().value;

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
              ln.rotate2D(Const.one_degree / 40, space.center);
              let collinear = Line.collinear(ln[0], ln[1], space.pointer, 0.1);

            
              // if not collinear, color the line based on whether the pointer is on left or right side
              let side = Line.sideOfPt2D(ln, space.pointer);
              form
                .stroke(side < 0 ? "rgba(255,166,122,0.13)" : "rgba(25,141,182,.15)")
                .line(ln);
              form.fillOnly("rgba(255,255,255,0.8").points(ln, 0.5);
            }

          },
        });

        space.bindMouse().bindTouch().play();

      }
  },
  mounted: async function () {
    //First execute this
    this.initializeBackgroundAnimation()

    //then execute this then wait 1700ms
    this.startTypingTopText()
    //then execute this
    setTimeout(() => {
      this.startTypingBottomText()
    }, 1700)
    // setTimeout(this.startTypingBottomText(), 1700) doesnt work
    
  },
};
</script>

<style scoped>
#header-text {
  pointer-events: all;
  padding: 8px;
  padding-top: 9px;
  background-image: url(../assets/hyphen_2.png);
  object-fit: cover;
  background-size: 600px;
  display: block;
  width: 136px; 
  height: 140px;
  content:"";
  transition-property: width filter;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  filter: grayscale(100%) contrast(200%);
}

#header-text:hover {
  width: 600px;
  filter: grayscale(0%) contrast(100%);
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

#hyphen_2-button {
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
    #header-text {
    pointer-events: all;
    padding: 4px;
    padding-top: 4px;
    background-image: url(../assets/hyphen_2.png);
    object-fit: cover;
    background-size: 450px;
    display: block;
    width: 104px; 
    height: 125px;
    content:"";
    transition-property: width filter;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    filter: grayscale(100%) contrast(200%);
  }

  #header-text:hover {
    width: 450px;
    filter: grayscale(0%) contrast(100%);
  }
}

@media only screen and (max-width: 535px) {
  h1 {
    font-size: 1.5em;
  }

  .btn {
    font-size: 14px;
  }
  
  #header-text {
    pointer-events: all;
    padding: 4px;
    padding-top: 4px;
    background-image: url(../assets/hyphen_2.png);
    object-fit: cover;
    background-size: 350px;
    display: block;
    width: 80px; 
    height: 85px;
    content:"";
    transition-property: width filter;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    filter: grayscale(100%) contrast(200%);
  }

  #header-text:hover {
    width: 350px;
    filter: grayscale(0%) contrast(100%);
  }
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 1em;
  }

  p {
    font-size: 1em;
  }

  #header-text {
    pointer-events: all;
    padding: 4px;
    padding-top: 4px;
    background-image: url(../assets/hyphen_2.png);
    object-fit: cover;
    background-size: 200px;
    display: block;
    width: 46px; 
    height: 50px;
    content:"";
    transition-property: width filter;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    filter: grayscale(100%) contrast(200%);
  }

  #header-text:hover {
    width: 200px;
    filter: grayscale(0%) contrast(100%);
  }
}

</style>
