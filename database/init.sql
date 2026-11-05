create table if not exists messages (
  id serial primary key,
  text text not null,
  created_at timestamptz not null default now()
);

insert into messages (text) values ('hello from the database');
