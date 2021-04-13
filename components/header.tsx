import ToggleSwitch from './toggle-switch';

const Header = () => {
  return (
    <div className="flex items-center py-6 mr-2 sm:-mr-1">
      <div className="ml-auto">
        <ToggleSwitch />
      </div>
    </div>
  );
};

export default Header;
