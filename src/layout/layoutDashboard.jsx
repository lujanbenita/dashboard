
const LayoutDashboard = ({children, className = "", title, footer = true}) => {
  return (
    <div className={`layout-dasboard ${className}`}>
      <h2>{ title }</h2>
      {children}

      {footer && 
        <div className="layout-dasboard__footer">© 2021 All rights reserved</div>
      }
    </div>
  );
};

export default LayoutDashboard;