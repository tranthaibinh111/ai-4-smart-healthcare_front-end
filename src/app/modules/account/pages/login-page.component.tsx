//#region React
import { ReactElement } from 'react';
//#endregion

//#region Package (third-party)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
//#endregion


const LoginPageComponent = (): ReactElement => {
  return (
    <div className="account">
      <div className="account__content">
        <div className="account__background">
          <span className="r" />
          <span className="r s" />
          <span className="r s" />
          <span className="r" />
        </div>
        <div className="card">
          <div className="card-body text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon={faUserLock} className="account__icon" />
            </div>
            <h3 className="mb-4">Đăng nhập hệ thống</h3>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Tên đăng nhập" />
            </div>
            <div className="input-group mb-4">
              <input type="password" className="form-control" placeholder="Mật khẩu" />
            </div>
            <button className="btn btn-primary shadow-2 mb-4">Đăng nhập</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPageComponent;
