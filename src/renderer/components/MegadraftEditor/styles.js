export const customStyleMap = {
  TITLE: {
    fontWeight: 400,
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
    paddingBottom: 30,
    fontSize: 24,
    width: '100%',
  },
  NEWTEXT: {
    background: '#d7e9be',
    padding: '0px 2px',
  },
  STRIKETHROUGH: {
    textDecoration: 'line-through',
    background: '#f2c3bc',
    padding: '0px 2px',
  },
};

export default (theme) => ({
  editor: {
    position: 'relative',
  },
  wordCount: {
    ...theme.typography.help,
    position: 'absolute',
    right: 20,
    top: -15,
  },
});