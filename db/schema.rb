# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160926205257) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "banks", force: :cascade do |t|
    t.integer  "balance",       default: 0
    t.integer  "interest_rate", default: 0
    t.date     "start_date"
    t.string   "type"
    t.integer  "child_id",                  null: false
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "save_item"
    t.index ["child_id"], name: "index_banks_on_child_id", using: :btree
  end

  create_table "children", force: :cascade do |t|
    t.string   "name",                          null: false
    t.string   "password_digest",               null: false
    t.integer  "parent_id",                     null: false
    t.integer  "undeposited_funds", default: 0
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.string   "username"
    t.index ["parent_id"], name: "index_children_on_parent_id", using: :btree
  end

  create_table "notifications", force: :cascade do |t|
    t.string   "text",       null: false
    t.integer  "child_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["child_id"], name: "index_notifications_on_child_id", using: :btree
  end

  create_table "parents", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "username"
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "amount",     null: false
    t.string   "item",       null: false
    t.integer  "child_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["child_id"], name: "index_rewards_on_child_id", using: :btree
  end

end
