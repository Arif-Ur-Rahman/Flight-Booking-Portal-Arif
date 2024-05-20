import React from 'react';

function Sidebar() {
    return (
        <div className="col-sm-3" id="sidebar">
            <div className="sidebar">
                <SidebarSection title="Number of Stops">
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="stop-check" value="Non Stop" /> Non Stop
                        </label>
                    </div>
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="stop-check" value="stop-1" /> One Stop
                        </label>
                    </div>
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="stop-check" value="stop-3" /> Multi Stop
                        </label>
                    </div>
                </SidebarSection>
                <SidebarSection title="Cabin Type">
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="cabin-check" value="Y" /> Economy
                        </label>
                    </div>
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="cabin-check" value="S" /> Premium Economy
                        </label>
                    </div>
                    {/* Add other cabin types here */}
                </SidebarSection>
                <SidebarSection title="Air Carrier">
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="class-check" value="EK" /> Emirates
                        </label>
                    </div>
                    <div className="checkbox" style={{ display: 'block' }}>
                        <label>
                            <input type="checkbox" className="class-check" value="TK" /> Turkish Airlines
                        </label>
                    </div>
                    {/* Add other airlines here */}
                </SidebarSection>
            </div>
        </div>
    );
}

function SidebarSection({ title, children }) {
    return (
        <div className="sidebar-content">
            <div className="sidebar-header">
                <h3>{title}</h3>
                <span><i className="glyphicon glyphicon-menu-down"></i></span>
            </div>
            <div className="filter">
                {/* Skeleton loader can be added here if needed */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
