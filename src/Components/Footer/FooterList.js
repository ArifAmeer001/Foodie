import "../../App.css";

const FooterList = (props) => {
  return (
    <>
      <li>
        <p class="footer-list-title">{props.title}</p>
      </li>

      <li>
        <p class="footer-list-item">{props.itemOne}</p>
      </li>

      <li>
        <p class="footer-list-item">{props.itemTwo}</p>
      </li>
      <li>
        {props.contactList ? (
          <address class="footer-list-item">{props.itemThree}</address>
        ) : (
          <p class="footer-list-item">{props.itemThree}</p>
        )}
      </li>
    </>
  );
};

export default FooterList;
