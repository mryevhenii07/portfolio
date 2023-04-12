import React from 'react';

import HtmlImg from '../assets/skills/html.png';
import CssImg from '../assets/skills/css.png';
import SassImg from '../assets/skills/sass.png';
import JsImg from '../assets/skills/javascript.png';
import ReactImg from '../assets/skills/react.png';
import NextJsImg from '../assets/skills/nextjs.png';
import ReduxImg from '../assets/skills/Redux.png';
import TailwindImg from '../assets/skills/tailwind.png';
import GitHubImg from '../assets/skills/github1.png';
import FirebaseImg from '../assets/skills/firebase.png';
import MaterialUiImg from '../assets/skills/material-ui.png';
import HookImg from '../assets/skills/react-hook-form.png';
import AgileImg from '../assets/skills/agile.png';
import TypeScriptImg from '../assets/skills/typescript.png';
import StyledComponentsImg from '../assets/skills/styledcomponents.png';
import TrelloImg from '../assets/skills/trello.png';
import FigmaImg from '../assets/skills/figma.png';
import SolidImg from '../assets/skills/solid.png';
import Restapi from '../assets/skills/restapi.png';
import WebpackImg from '../assets/skills/webpack.png';
import BootstrapImg from '../assets/skills/bootstrap.png';
import FormikImg from '../assets/skills/formik.png';

const Skills = () => {
  return (
    <div id="skills" className="w-full  p-2 mt-1">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={HtmlImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={CssImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TailwindImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={StyledComponentsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>StyledComponents</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={SassImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SASS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={BootstrapImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Bootstrap-react@4</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={JsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Java Script</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ReactImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TypeScriptImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={NextJsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ReduxImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux-toolkit</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={GitHubImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FirebaseImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={HookImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React-Hook-Form</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FormikImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Formik Yup</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={MaterialUiImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Material-Ui</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={WebpackImg} alt="img" width="124" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Webpack</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={Restapi} alt="img" width="104" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Rest Api</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={AgileImg} alt="img" width="84" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Agile/Scrum</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FigmaImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TrelloImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Trello</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={SolidImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SOLID</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
