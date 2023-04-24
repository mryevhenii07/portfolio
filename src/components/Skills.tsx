import { FC } from 'react';
import { useTranslation } from 'react-i18next';

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
import ViteImg from '../assets/skills/Vitejs.png';
import styled from 'styled-components';

const Skills: FC = () => {
  const { t } = useTranslation();
  return (
    <div id="skills" className="w-full  p-2 mt-1">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">{t('skills')}</p>
        <h2 className="py-4">{t('skillsDo')}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={HtmlImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>HTML</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={CssImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>CSS</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TailwindImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Tailwind</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={StyledComponentsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>StyledComponents</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={SassImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>SASS</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={BootstrapImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Bootstrap-react@4</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={JsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Java Script</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ReactImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>REACT</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TypeScriptImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>TypeScript</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={NextJsImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>NEXT.js</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ReduxImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Redux-toolkit</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={GitHubImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>GitHub</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FirebaseImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Firebase</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={HookImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>React-Hook-Form</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FormikImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Formik Yup</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={MaterialUiImg} alt="img" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Material-Ui</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={WebpackImg} alt="img" width="124" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Webpack</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={ViteImg} alt="img" width="60" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Vite</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={Restapi} alt="img" width="104" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Rest Api</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={AgileImg} alt="img" width="84" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Agile/Scrum</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={FigmaImg} alt="img" width="114" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Figma</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={TrelloImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>Trello</TextColorH3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img src={SolidImg} alt="img" width="94" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <TextColorH3>SOLID</TextColorH3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

const TextColorH3 = styled.h3`
  color: ${(props) => props.theme.textColor};
`;
