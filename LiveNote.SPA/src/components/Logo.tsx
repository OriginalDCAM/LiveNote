import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTree} from "@fortawesome/free-solid-svg-icons";
import "./Logo.css";

export default function Logo() {
    return (
        <a className="logo" href="/">
            <span className="logo__mark">
                <FontAwesomeIcon icon={faTree}/>
            </span>
            <span className="logo__text">LiveNote</span>
        </a>
    );
}
