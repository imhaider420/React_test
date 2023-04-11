const [textColor, setTextColor] = useState("Fr");

const handleChnageTextColor = (e) => {
  setTextColor("IN");
};

return (
  <>
    <label onClick={handleChnageTextColor} className="switch"></label>
  </>
);
