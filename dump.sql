PGDMP     '                    {           artporfolio    12.14    12.14     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    30024    artporfolio    DATABASE     i   CREATE DATABASE artporfolio WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C' LC_CTYPE = 'C';
    DROP DATABASE artporfolio;
                lshi    false            �            1259    30027    art    TABLE     ^   CREATE TABLE public.art (
    id integer NOT NULL,
    description text,
    imageurl text
);
    DROP TABLE public.art;
       public         heap    lshi    false            �            1259    30025 
   art_id_seq    SEQUENCE     �   CREATE SEQUENCE public.art_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 !   DROP SEQUENCE public.art_id_seq;
       public          lshi    false    203            �           0    0 
   art_id_seq    SEQUENCE OWNED BY     9   ALTER SEQUENCE public.art_id_seq OWNED BY public.art.id;
          public          lshi    false    202            !           2604    30030    art id    DEFAULT     `   ALTER TABLE ONLY public.art ALTER COLUMN id SET DEFAULT nextval('public.art_id_seq'::regclass);
 5   ALTER TABLE public.art ALTER COLUMN id DROP DEFAULT;
       public          lshi    false    203    202    203            �          0    30027    art 
   TABLE DATA           8   COPY public.art (id, description, imageurl) FROM stdin;
    public          lshi    false    203   �	       �           0    0 
   art_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.art_id_seq', 1, false);
          public          lshi    false    202            #           2606    30035    art art_pkey 
   CONSTRAINT     J   ALTER TABLE ONLY public.art
    ADD CONSTRAINT art_pkey PRIMARY KEY (id);
 6   ALTER TABLE ONLY public.art DROP CONSTRAINT art_pkey;
       public            lshi    false    203            �   l   x�3�)JM-V0�0��())(���/�L..��+��/�/�720�2�t�,�T�L-W0�0��҄˂өR�$#U�85Q�� �� �bs.cN���̔�J����7����� �5     