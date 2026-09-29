-- Reserved for Phase B. No upload/read policies: evidence cannot be submitted yet.
insert into storage.buckets(id, name, public, file_size_limit, allowed_mime_types)
values ('payment-evidence', 'payment-evidence', false, 5242880, array['image/jpeg','image/png','application/pdf'])
on conflict (id) do nothing;
