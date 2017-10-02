import React from 'react';
import { Link } from 'found';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './index.css';

import ContentWrapper from '../components/ContentWrapper';
import HeaderImage from '../components/HeaderImage';
import ThumbnailList from '../components/ThumbnailList';

class Index extends React.Component {
  render() {
    const { data } = this.props;
    const { projects } = data;
    return (
      <div className={styles.base}>
        <HeaderImage
          src="https://lh3.googleusercontent.com/zzTg0sgIRa06EcsRKUvvLZwNNOgq1JuJ2n9wR4vKBI74fl5iEuqKS7ZXr4mGYL78qaE6OMOwCWgqDMNsoYwlC0cJldt8ZNZxjwI_0cHUXRAOWkjThMUoUk0je1dniS4E0-xShrTUjflynybPB8Wgxn-tx4mfQF3Z7YOMh2gIoaiuINh-doT-YAGq7Uh2nFx6SD6yslqMp7Zha7K3oPKQcF2u5vLkBoYx_Dj-pWOwtrWztjA4VzraKf3dO2Ij4CAuTpMSyxLOGQn45pFnj_ZTPuSgA-tO06kh3f-i_UpF-UTZ3eKEJksD9txLablr8GxGdxDZo4W5En0ZlBGDnr_P0ATsiEJ_OQRvXRmj5xUAtbXRJ48jox6EF2W8JR2kUJxeAcVkJE6zI89Wi84Ielwymtyjs0qRYeN0E9OTGTP2NBY4qVySSADk00uBbKEHxp1c34b2vJaLCNmv7oCxiJILn6uREKXajq4NBSa96-gTN3405qdNgK5AdgFrrD-m_U0jOurhkHzXQ3RL9ymut81-5nIbOyUlL2AKI8WTZZhKdxbhOltosIz-OMH_sZFT0ofwOKJTR80jcsd18Q9lbDOLXsd63LmMNxH1lKCLWYWw863OuuZCWQbn=w1920"
          alt="Miyashita Lab"
        />
        <ContentWrapper>
          <h2>最新情報</h2>
          <h2>プロジェクト</h2>
          <ThumbnailList items={projects} />
        </ContentWrapper>
      </div>
    );
  }
}
export default withStyles(styles)(Index);
