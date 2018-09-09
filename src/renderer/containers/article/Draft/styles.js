export default (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: theme.colors.white,
    height: 'auto',
    width: '100%',
    overflow: 'auto',
  },
  header: {
    display: 'flex',
    flexShrink: 0,
    height: '28vh',
    backgroundColor: theme.colors.gray,
  },
  draft: {
    display: 'inline-flex',
    flexDirection: 'column',
    flexGrow: 1,
    minHeight: '50vh',
    height: '100%',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    minHeight: '30vh',
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    minHeight: 65,
    borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
    paddingLeft: theme.spacing,
    paddingRight: theme.spacing * 8,
    flexShrink: 0,
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
  },
  editor: {
    display: 'block',
    paddingLeft: 60,
    paddingTop: theme.spacing * 2,
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
    minHeight: '70vh',
  },
  aside: {
    display: 'flex',
    flexShrink: 0,
    flexDirection: 'column',
    paddingLeft: theme.spacing,
    paddingTop: theme.spacing * 2,
    width: '25%',
    height: '100%',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing,
    minHeight: 60,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: theme.colors.lightestGray,
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
  },
});