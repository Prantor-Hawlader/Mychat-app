import { GrLogout } from "react-icons/gr";
import { useLogout } from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <GrLogout onClick={logout} className="h-6 w-6 text-white" />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};

export default LogoutButton;
