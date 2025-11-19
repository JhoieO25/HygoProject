CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(20)
);

INSERT INTO users (username, password, role) VALUES
('Jalice101', 'Admin@123', 'ADMIN'),
('Srobert234', 'Admin@123', 'ADMIN'),
('Wemma345', 'Admin@123', 'ADMIN'),
('Bjohn456', 'Teach@123', 'TEACHER'),
('Dlaura567', 'Teach@123', 'TEACHER'),
('Mmichael678', 'Teach@123', 'TEACHER'),
('Wolivia789', 'Teach@123', 'TEACHER'),
('Mjames890', 'Teach@123', 'TEACHER'),
('Tsophia901', 'Teach@123', 'TEACHER'),
('Adaniel112', 'Teach@123', 'TEACHER'),
('Tgrace223', 'Teach@123', 'TEACHER'),
('Hhenry334', 'Teach@123', 'TEACHER'),
('Wchloe445', 'Teach@123', 'TEACHER'),
('Hlima556', 'Stud@123', 'STUDENT'),
('Mmia667', 'Stud@123', 'STUDENT'),
('Tnoah778', 'Stud@123', 'STUDENT'),
('Gaava889', 'Stud@123', 'STUDENT'),
('Metan990', 'Stud@123', 'STUDENT'),
('Risabella111', 'Parent@123', 'PARENT'),
('Cwilliam222', 'Parent@123', 'PARENT'),
('Rsophia333', 'Parent@123', 'PARENT'),
('Ljames444', 'Parent@123', 'PARENT'),
('Leemily555', 'Parent@123', 'PARENT');
