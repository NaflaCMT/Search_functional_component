import React from "react";

const CardList = ({ filteredUser, image }) => {
  return (
    <div>
      <div className="card-list">
        {filteredUser.map((user) => (
          <div className="card-container">
            <div>
              <img
                src={`https://robohash.org/${user.id}?set=set${image}`}
                className="img"
              />
              <div className="names">
                <h2>{user.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
