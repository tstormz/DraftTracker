class CreateTeams < ActiveRecord::Migration[5.2]
  def up
    if not ActiveRecord::Base.connection.data_source_exists? 'teams'
      create_table :teams do |t|
        t.string :name
        t.integer :bye
        t.timestamps
      end
    end
  end

  def down
  end
end
