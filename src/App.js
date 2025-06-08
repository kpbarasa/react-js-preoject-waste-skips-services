import MainBody from "./components/main-body";
import ServiceSelectionPage from "./pages/service-selection/service-selection.jsx";
import { SkipsProvider } from "./hooks/context/context_skips_provider.jsx";
/**
 * App
 *
 * Root component of the application.
 * Wraps the application in the SkipsProvider to provide skip data context globally.
 * Renders the MainBody layout component that contains the main page content.
 * Displays the ServiceSelectionPage which handles the skip selection workflow.
 */

function App() {
  return (
    <SkipsProvider>

      <MainBody>

        <ServiceSelectionPage />

      </MainBody>

    </SkipsProvider>
  );
}

export default App;
