from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    role = Column(String, default="employee")

    tasks = relationship("Task", back_populates="assigned_to_user")

class Task(Base):
    __tablename__ = "tasks"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    hours_spent = Column(Integer, default=0)
    status = Column(String, default="in progress")
    start_time = Column(DateTime, nullable=True)
    end_time = Column(DateTime, nullable=True)
    assigned_to = Column(Integer, ForeignKey("users.id"))

    assigned_to_user = relationship("User", back_populates="tasks")
