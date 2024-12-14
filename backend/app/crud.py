from sqlalchemy.orm import Session
from app import models, schemas
from datetime import datetime

def create_user(db: Session, user: schemas.UserCreate):
    db_user = models.User(**user.dict())
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db: Session):
    return db.query(models.User).all()

def create_task(db: Session, task: schemas.TaskCreate):
    db_task = models.Task(**task.dict())
    db.add(db_task)
    db.commit()
    db.refresh(db_task)
    return db_task

def get_tasks(db: Session):
    return db.query(models.Task).all()

def update_task_times(db: Session, task_id: int, start_time: datetime, end_time: datetime):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if not task:
        return None
    task.start_time = start_time
    task.end_time = end_time
    db.commit()
    db.refresh(task)
    return task

def delete_task(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if not task:
        return None
    db.delete(task)
    db.commit()
    return task

def toggle_task_status(db: Session, task_id: int):
    task = db.query(models.Task).filter(models.Task.id == task_id).first()
    if not task:
        return None
    task.status = "completed" if task.status != "completed" else "in progress"
    db.commit()
    db.refresh(task)
    return task