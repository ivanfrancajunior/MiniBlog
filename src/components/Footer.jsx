

const Footer = () => {
  const date = new Date();
  const now = date.getFullYear();
  return (
    <footer className="flex items-center justify-around gap-20 p-3 bg-zinc-900 text-white h-20">
      <div>Miniblog</div>
      <div> &copy; {now} </div>
      <div className="flex items-center justify-between gap-5">
        <span>a</span>
        <span>a</span>
        <span>a</span>
       
      </div>
    </footer>
  );
};

export default Footer;
