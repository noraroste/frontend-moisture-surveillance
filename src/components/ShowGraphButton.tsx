import { hideGraphText, showGraphText } from '../utils/texts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './showGraphButton.css';

export function ShowGraphButton(props: {
  onClick: () => void;
  showGraph: boolean;
}) {
  return (
    <button className={'show-graph-button'} onClick={props.onClick}>
      <span className={'show-graph-button__text'}>
        {props.showGraph ? hideGraphText : showGraphText}
        <FontAwesomeIcon
          className={'show-graph-button__icon'}
          icon={props.showGraph ? faChevronUp : faChevronDown}
        />
      </span>
    </button>
  );
}
