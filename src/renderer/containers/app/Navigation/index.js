import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import PropTypes from 'prop-types';
import injectStyles from 'react-jss';
import { injectIntl, FormattedMessage } from 'react-intl';
import { NavList } from '../../../components';
import {
  //FaBullhorn as BullhornIcon,
  FaComment as CommentIcon,
  FaEdit as EditIcon,
  FaFlag as FlagIcon,
  //FaStar as StarIcon,
  FaThumbsUp as ThumbsUpIcon,
  //FaDesktop as DesktopIcon,
  FaPencilAlt as PencilIcon,
  FaTag as TagIcon,
  FaWallet as WalletIcon,
} from 'react-icons/fa';
import { MdLocationSearching as LocationSearchingIcon } from 'react-icons/md';
import styles from './styles';

class Navigation extends React.Component {
  componentDidMount() {
    // TODO: Add back in categories fetch
    // this.props.getCategories();
  }

  render() {
    const { articleLinks, classes, myLinks, pageLinks, isLoggedIn } = this.props;
    return (
      <nav className={classes.menu}>
        <div className={classes.content}>
          <NavList
            activeLinkClass="nav-list-active"
            title={<FormattedMessage id="sidebar_articles" defaultMessage="Articles" />}
            items={articleLinks}
            styles={{ container: styles.articleList }}
          />
          {isLoggedIn && (
            <NavList
              activeLinkClass="nav-list-active"
              title={<FormattedMessage id="sidebar_my_pages" defaultMessage="My Pages" />}
              items={myLinks}
            />
          )}
          <NavList
            activeLinkClass="nav-list-active"
            title={<FormattedMessage id="sidebar_pages" defaultMessage="Lunyr Pages" />}
            items={pageLinks}
          />
        </div>
        <footer className={classes.footer}>
          <h3 className={classes.version}>Lunyr Orbiter Release</h3>
          <a
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="/home/terms.pdf">
            <FormattedMessage id="sidebar_termsAndConditions" defaultMessage="Terms & Conditions" />
          </a>
          <a
            className={classes.link}
            target="_blank"
            rel="noopener noreferrer"
            href="/home/privacy.pdf">
            <FormattedMessage id="sidebar_privacyPolicy" defaultMessage="Privacy Policy" />
          </a>
        </footer>
      </nav>
    );
  }
}

const toCategoryLink = (intl, { name }) => ({
  to: `/category/${name}`,
  display: intl.formatMessage({
    id: `category_${name ? name.replace(new RegExp(' ', 'g'), '_').toLowerCase() : 'na'}`,
    defaultMessage: name,
  }),
});

const mapStateToProps = ({ auth: { isLoggedIn } }, { intl }) => {
  const categories = [];
  const baseLinks = [
    {
      exact: true,
      to: '/',
      display: intl.formatMessage({
        id: 'link_feed',
        defaultMessage: 'Feed',
      }),
    },
    {
      exact: true,
      to: '/articles',
      display: intl.formatMessage({
        id: 'link_allArticles',
        defaultMessage: 'All Articles',
      }),
    },
  ];

  return {
    articleLinks: baseLinks.concat(categories.map(toCategoryLink.bind(this, intl))),
    isLoggedIn,
    myLinks: isLoggedIn
      ? [
          {
            to: '/wallet',
            display: intl.formatMessage({
              id: 'link_wllet',
              defaultMessage: 'Wallet',
            }),
            icon: <WalletIcon />,
          },
          {
            to: '/drafts',
            display: intl.formatMessage({
              id: 'link_wllet',
              defaultMessage: 'Drafts',
            }),
            icon: <EditIcon />,
          },
        ]
      : [],
    pageLinks: [
      {
        to: '/articles/unreviewed',
        display: intl.formatMessage({
          id: 'link_peerReview',
          defaultMessage: 'Peer Review Article',
        }),
        icon: <ThumbsUpIcon />,
      },
      {
        to: '/tagging',
        display: intl.formatMessage({
          id: 'link_tagging',
          defaultMessage: 'Article Tagging',
        }),
        icon: <TagIcon />,
      },
      ,
      {
        to: '/advertising',
        display: intl.formatMessage({
          id: 'link_advertise',
          defaultMessage: 'Advertise',
        }),
        icon: <FlagIcon />,
      },
      {
        to: 'https://lunyragent.gitbooks.io/lunyr-manual/content/',
        display: intl.formatMessage({
          id: 'header_writingManual',
          defaultMessage: 'Writing Manual',
        }),
        icon: <PencilIcon />,
        target: '_blank',
      },
      {
        to: '/about',
        display: intl.formatMessage({
          id: 'link_about',
          defaultMessage: 'About',
        }),
        icon: <LocationSearchingIcon />,
      },
      {
        to: '/faq',
        display: intl.formatMessage({
          id: 'link_faq',
          defaultMessage: 'FAQs',
        }),
        icon: <CommentIcon />,
      },
      /*
      {
        to: '/announcements',
        display: intl.formatMessage({
          id: 'link_announcements',
          defaultMessage: 'Announcements',
        }),
        icon: <BullhornIcon />,
      },
      */
    ],
  };
};

export default withRouter(
  injectIntl(
    connect(
      mapStateToProps,
      null,
      null,
      { withRef: true }
    )(injectStyles(styles)(Navigation))
  )
);
