import { handleSubmit } from './js/formHandler.js';
import { activateSubmitIfValidUrl } from './js/validateUrl.js';

// We can do this, thanks to css-loader!
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';

// For some reason, I need export both here AND at function definitions.
export { activateSubmitIfValidUrl, handleSubmit };
