create table if not exists greetings (
  id serial primary key,
  message text not null
);

insert into greetings (message) values ('hello from the database');
