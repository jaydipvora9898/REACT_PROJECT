import { useParams, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaPhone, FaArrowLeft } from "react-icons/fa";
import { Button, Card } from 'react-bootstrap';
import './Employee.css';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const getStorageData = () => {
    const Employees = JSON.parse(localStorage.getItem("Employees"));
    return Employees ? Employees : [];
  };
  
  const employees = getStorageData();
  const employee = employees.find(emp => emp.id === parseInt(id));
  
  if (!employee) {
    return (
      <div className="employee-detail-container">
        <div className="not-found-card">
          <h2>Employee Not Found</h2>
          <p>The employee you're looking for doesn't exist.</p>
          <Button variant="primary" onClick={() => navigate('/')}>
            <FaArrowLeft /> Back to Employee List
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="employee-detail-container">
      <div className="detail-header">
        <Button variant="outline-primary" onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Back to Employee List
        </Button>
      </div>
      
      <Card className="employee-detail-card">
        <Card.Header className="detail-card-header">
          <div className="employee-avatar-large">
            <FaUser size={50} />
          </div>
          <div className="employee-title-large">
            <h1>{employee.firstname} {employee.lastname}</h1>
            <p className="employee-position">Employee Details</p>
          </div>
        </Card.Header>
        
        <Card.Body className="detail-card-body">
          <div className="detail-section">
            <div className="detail-item-large">
              <FaEnvelope className="detail-icon-large" />
              <div className="detail-content">
                <p className="detail-label-large">Email Address</p>
                <p className="detail-value-large">{employee.email}</p>
              </div>
            </div>
            
            <div className="detail-item-large">
              <FaPhone className="detail-icon-large" />
              <div className="detail-content">
                <p className="detail-label-large">Phone Number</p>
                <p className="detail-value-large">{employee.phone}</p>
              </div>
            </div>
            
            <div className="detail-item-large">
              <FaMapMarkerAlt className="detail-icon-large" />
              <div className="detail-content">
                <p className="detail-label-large">Home Address</p>
                <p className="detail-value-large">{employee.address}</p>
              </div>
            </div>
            
            <div className="detail-item-large">
              <FaUser className="detail-icon-large" />
              <div className="detail-content">
                <p className="detail-label-large">Employee ID</p>
                <p className="detail-value-large">{employee.id}</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmployeeDetail;