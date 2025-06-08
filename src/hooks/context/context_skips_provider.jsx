import { createContext, useState, useEffect } from "react";
import { fetchSkips } from "../../data/api.jsx";
/**
 * SkipsContext
 * 
 * React Context to share skips data and loading state across components.
 */
export const SkipsContext = createContext();

/**
 * SkipsProvider
 * 
 * Context provider component responsible for:
 * - Fetching skips data from the API when mounted
 * - Providing the skips data and loading status to descendant components
 * 
 * Props:
 * @param {React.ReactNode} children - Components wrapped by this provider will have access to skips context
 * 
 * State:
 * - skips: Array holding skip objects fetched from the API
 * - loading: Boolean indicating if data is still being loaded
 */
export const SkipsProvider = ({ children }) => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkips().then((data) => {
      setSkips(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
  }, [skips]);

  return (
    <SkipsContext.Provider value={{ skips, loading }}>
      {children}
    </SkipsContext.Provider>
  );
};
