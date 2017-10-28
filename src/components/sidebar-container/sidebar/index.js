import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Copyright from './copyright';
import Icons from './icons';
import Project from './project';
import styles from './styles.scss';

const projects = [
  {
    title: 'Curriculum Vitae',
    url: 'http://kamilmielnik.com/',
    gitHubUrl: 'https://github.com/kamilmielnik/cv',
    previewUrl: 'https://raw.githubusercontent.com/kamilmielnik/cv/master/screenshot.png'
  },
  {
    title: 'Scrabble Solver',
    url: 'http://scrabble-solver.kamilmielnik.com/',
    gitHubUrl: 'https://github.com/kamilmielnik/scrabble-solver',
    previewUrl: 'https://raw.githubusercontent.com/kamilmielnik/scrabble-solver/master/screenshot.png'
  }
];

const Sidebar = ({ className, onClick }) => (
  <div className={classNames(styles.sidebar, className)} onClick={onClick}>
    <div className={styles.header}>
      My projects
    </div>

    <div className={styles.projects}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>

    <div className={styles.footer}>
      <Icons />
      <Copyright className={styles.copyright} />
    </div>
  </div>
);

Sidebar.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default Sidebar;
