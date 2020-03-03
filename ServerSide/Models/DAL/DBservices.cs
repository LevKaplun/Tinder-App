using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using System.Web.Configuration;
using System.Data;
using System.Text;
using WebApplication1.Models;
public class DBservices
{
    public SqlDataAdapter da;
    public DataTable dt;

    public DBservices()
    {
    }

    public SqlConnection connect(String conString)
    {
        string cStr = WebConfigurationManager.ConnectionStrings[conString].ConnectionString;
        SqlConnection con = new SqlConnection(cStr);
        con.Open();
        return con;
    }
    public int DeleteF(int id)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("DBConnectionString");
        }
        catch (Exception ex)
        {
            throw (ex);
        }

        String cStr = "delete from Tinder_2020_F where id = "+id;

        cmd = CreateCommand(cStr, con);

        try
        {
            int numEffected = cmd.ExecuteNonQuery();
            return numEffected;
        }
        catch (Exception ex)
        {
            return 0;
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                con.Close();
            }
        }

    }
    public int insertF(int id)
    {

        SqlConnection con;
        SqlCommand cmd;

        try
        {
            con = connect("DBConnectionString");
        }
        catch (Exception ex)
        {
            throw (ex);
        }

        String cStr = BuildInsertCommand(id);

        cmd = CreateCommand(cStr, con);

        try
        {
            int numEffected = cmd.ExecuteNonQuery();
            return numEffected;
        }
        catch (Exception ex)
        {
            return 0;
            throw (ex);
        }

        finally
        {
            if (con != null)
            {
                con.Close();
            }
        }

    }
    
    private string BuildInsertCommand(int id)
    {
        String command;

        StringBuilder sb = new StringBuilder();
        sb.AppendFormat("Values('{0}')", id);
        String prefix = "INSERT INTO Tinder_2020_F (id) ";
        command = prefix + sb.ToString();

        return command;
    }

    private SqlCommand CreateCommand(String CommandSTR, SqlConnection con)
    {

        SqlCommand cmd = new SqlCommand(); // create the command object

        cmd.Connection = con;              // assign the connection to the command object

        cmd.CommandText = CommandSTR;      // can be Select, Insert, Update, Delete 

        cmd.CommandTimeout = 10;           // Time to wait for the execution' The default is 30 seconds

        cmd.CommandType = System.Data.CommandType.Text; // the type of the command, can also be stored procedure

        return cmd;
    }

    public List<User> getFavoritesUsers()
    {
        List<User> users = new List<User>();
        SqlConnection con = null;

        try
        {
            con = connect("DBConnectionString");
            String selectSTR = "SELECT * FROM Tinder_2020 T inner join Tinder_2020_F F on T.id=F.id";
            SqlCommand cmd = new SqlCommand(selectSTR, con);

            SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            while (dr.Read())
            {
                User u = new User();
                u.Id = Convert.ToInt32(dr["id"]);
                u.Name = (string)dr["name"];
                u.Gender = (string)dr["gender"];
                u.Age = Convert.ToInt32(dr["age"]);
                u.Height = Convert.ToDouble(dr["height"]);
                u.City = (string)(dr["city"]);
                u.Hobbies = ((string)dr["hobbies"]).Split(',');
                u.Image = (string)(dr["image"]);
                u.Premium = (bool)(dr["premium"]);

                users.Add(u);
            }

            return users;
        }
        catch (Exception ex)
        {
            throw (ex);
        }
        finally
        {
            if (con != null)
            {
                con.Close();
            }

        }
    }

    public List<User> getUnFavoritesUsers()
    {
        List<User> users = new List<User>();
        SqlConnection con = null;

        try
        {
            con = connect("DBConnectionString");
            String selectSTR = "SELECT * FROM Tinder_2020 T where T.id != ALL(select * from Tinder_2020_F)";
            SqlCommand cmd = new SqlCommand(selectSTR, con);

            SqlDataReader dr = cmd.ExecuteReader(CommandBehavior.CloseConnection);
            while (dr.Read())
            {
                User u = new User();
                u.Id = Convert.ToInt32(dr["id"]);
                u.Name = (string)dr["name"];
                u.Gender = (string)dr["gender"];
                u.Age = Convert.ToInt32(dr["age"]);
                u.Height = Convert.ToDouble(dr["height"]);
                u.City = (string)(dr["city"]);
                u.Hobbies = ((string)dr["hobbies"]).Split(',');
                u.Image = (string)(dr["image"]);
                u.Premium = (bool)(dr["premium"]);

                users.Add(u);
            }

            return users;
        }
        catch (Exception ex)
        {
            throw (ex);
        }
        finally
        {
            if (con != null)
            {
                con.Close();
            }

        }
    }

    //public DBservices readCars() {
    //    SqlConnection con = null;
    //    try
    //    {
    //        con = connect("DBConnectionString");
    //        da = new SqlDataAdapter("select * from cars_2020", con);
    //        SqlCommandBuilder builder = new SqlCommandBuilder(da);
    //        DataSet ds = new DataSet();
    //        da.Fill(ds);
    //        dt = ds.Tables[0];
    //    }

    //    catch (Exception ex){
    //        // write errors to log file
    //        // try to handle the error
    //        throw ex;
    //    }

    //    finally {
    //        if (con != null)
    //        {
    //            con.Close();
    //        }
    //    }


    //    return this;

    //}

    public void update()
    {
        da.Update(dt);
    }

}
