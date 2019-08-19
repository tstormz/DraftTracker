class CreatePlayers < ActiveRecord::Migration[5.2]
  def up
    create_table :players do |t|
      t.integer :tier
      t.string :name
      t.string :team
      t.string :position
    end
  end

  def down
    drop_table :players
  end
end
